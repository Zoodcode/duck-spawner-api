import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DuckDocument = Duck & Document;

@Schema()
export class Duck {
  @Prop({ required: true })
  property: string;
}


export const DuckSchema = SchemaFactory.createForClass(Duck);