export interface Jewel {
  name: String,
  code: String,
  description: String,
  city: String,
  branch: String,
  image?: String,
  goldCarat: Number,
  percentageChrg: Number,
  grossWeight: Number,
  netWeight: Number,
  stoneWeight: Number,
  beadsWeight: Number,
  perGramWeight: Number,
  tap?: Number,
  sold?: Number
}

export class IJewel implements Jewel {
  constructor(
    public name: String,
    public code: String,
    public description: String,
    public city: String,
    public branch: String,
    public image: String,
    public goldCarat: Number,
    public percentageChrg: Number,
    public grossWeight: Number,
    public netWeight: Number,
    public stoneWeight: Number,
    public beadsWeight: Number,
    public perGramWeight: Number,
    public tap: Number,
    public sold: Number
  ) { }
}
