// import { logging, storage } from 'near-sdk-as'
// const DEFAULT_MESSAGE = 'Hello'
// export function get_greeting(): string {
//   return storage.getPrimitive<string>('message', DEFAULT_MESSAGE)
// }
// export function set_greeting(message: string): void {
//   logging.log(`Saving greeting '${message}'`)
//   storage.set<string>('message', message)
// }

import { Context, logging, PersistentMap,u128,ContractPromiseBatch } from 'near-sdk-as';

const mainBlock = 'rahulsinghmain.testnet';
const Users = new PersistentMap<string,string[]>('user');
const MovieFeedback = new PersistentMap<string,string[]>(' movieFeedback ');

// Change Methods 

export function addUser(user:string):void{
  logging.log('adding user')
  let usersArr = Users.getSome(mainBlock);
  if(usersArr.length > 0){
  for (let i=0 ; i < usersArr.length ; i++){
    if(usersArr[i] === user){
      logging.log('user already exist ');
      break
    }else{
      let senderUser=Users.getSome(mainBlock);
      senderUser.push(user);
      Users.set(Context.sender,senderUser);
      logging.log('user added successfully');
      break
    }
  }
}else{
  Users.set(Context.sender,[user]);
  logging.log('user added successfully');
}
}

export function addFeedback(id:string,message:string,name:string,user:string):void{
  logging.log('adding movie feedback');
  if (MovieFeedback.contains(Context.sender)){
      let senderMovieFeedback=MovieFeedback.getSome(Context.sender);
      senderMovieFeedback.push(message+`/*/${id}/*/${name}/*/${user}`);
      MovieFeedback.set(Context.sender,senderMovieFeedback);
  }else{
    MovieFeedback.set(Context.sender,[`${message}/*/${id}/*/${name}/*/${user}`])
  }
  }

  export function clearAllFeedback():void{
    logging.log('clear all feedback');
    MovieFeedback.set(Context.sender,[]) 
  }

// View Methods 

  export function getFeedback():string[]{
    if(Users.contains(mainBlock)){
      let usersArr = Users.getSome(mainBlock);
      let feedbacks = [''];
      feedbacks = []
      for (let i =0 ; i < usersArr.length ; i++){
        if(MovieFeedback.contains(usersArr[i])){
          // return MovieFeedback.getSome(user)
          let mFeedbacks = MovieFeedback.getSome(usersArr[i]);
          for (let i=0 ; i < mFeedbacks.length ; i++){
            feedbacks.push(mFeedbacks[i]);
          }
      }else{
        let msg = `no feedback were found for this user${usersArr[i]}`;
          logging.log(msg)
          // return[]
          // feedbacks = [...feedbacks]
      }
      }
      return feedbacks;
    }else{
      logging.log('no user exist......')
      return [];
    }
  }

  export function getUserFeedback(user:string):string[]{
    if(MovieFeedback.contains(user)){
      return MovieFeedback.getSome(user)
  }else{
    let msg = `no feedback were found for this user${user}`;
      logging.log(msg)
      return[]
  }
  }

  // export function getUsers(user:string):string[]{
    export function getUsers():string[]{
    // if(Context.sender === user){
    if(Users.contains(mainBlock)){
      return Users.getSome(mainBlock);
    }else{
      logging.log('users are not exist');
      return []
    }
  // }else{
  //   return []
  // }
  }