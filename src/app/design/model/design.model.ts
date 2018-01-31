export interface DesignResp {
  success: boolean;
  data: design[];
}

export interface design {
    name: {
      name: String,
      value: String,
      visibility: boolean
    },
    code: {
      name: String,
      value: String,
      visibility: boolean
    },
    description: {
      name: String,
      value: String,
      visibility: boolean
    },
    city: {
      name: String,
      value: String,
      visibility: boolean
    },
    branch: {
      name: String,
      value: String,
      visibility: boolean
    },
    goldCarat: {
      name: String,
      value: String,
      visibility: boolean
    },
    percentageChrg: {
      name: String,
      value: String,
      visibility: boolean
    },
    grossWeight: {
      name: String,
      value: String,
      visibility: boolean
    },
    netWeight: {
      name: String,
      value: String,
      visibility: boolean
    },
    stoneWeight: {
      name: String,
      value: String,
      visibility: boolean
    },
    beadsWeight: {
      name: String,
      value: String,
      visibility: boolean
    },
    perGramWeight: {
      name: String,
      value: String,
      visibility: boolean
    },
    image: {
      name: String,
      value: String,
      visibility: boolean
    },
    tap: {
      name: String,
      value: String,
      visibility: boolean
    },
    sold: {
      name: String,
      value: String,
      visibility: boolean
    }
}