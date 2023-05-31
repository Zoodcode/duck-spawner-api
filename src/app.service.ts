import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Duck, DuckDocument } from './duck.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Duck.name)
    private demoModel: Model<DuckDocument>,
  ) {}

  async getDucks(): Promise<Duck[]> {
    return await this.demoModel.find();
  }

  async createDuck(body: { property: string }) {
    return await this.demoModel.create({ property: body.property });
  }
}
