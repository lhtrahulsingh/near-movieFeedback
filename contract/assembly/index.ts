import { Context, logging, PersistentMap,u128,ContractPromiseBatch } from 'near-sdk-as';

const MovieFeedback = new PersistentMap<string,string[]>(' movieFeedback ');

// Change Methods 

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

  export function getFeedback(users:string[]):string[]{
      if(users){
      let feedbacks = [''];
      feedbacks = []
      for (let i =0 ; i < users.length ; i++){
        if(MovieFeedback.contains(users[i])){
          let mFeedbacks = MovieFeedback.getSome(users[i]);
          for (let i=0 ; i < mFeedbacks.length ; i++){
            feedbacks.push(mFeedbacks[i]);
          }
      }else{
        let msg = `no feedback were found for this user${users[i]}`;
          logging.log(msg)
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
