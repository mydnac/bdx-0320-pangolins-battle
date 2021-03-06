import { Algo } from './algo-list';


export class Battle{
  public id: number;
  public createdBy: string;
  public lastEditBy: string;
  public level: number;
  public algoList: Algo[];


  constructor(
    public name: string,
    public launchDate: Date,
    public givenTime: number,
  ) {}
}
