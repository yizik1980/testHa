

export interface CommentData {
    id: number;
    parentCommentId?: any;
    ownerId: number;
    txt: string;
    createdAt: Date;
    deletedAt?: any;
  }
  
  export interface CommentNode extends CommentData{
    children:Array<CommentNode>;
  }