export interface IOperation {
    key: string,
    description: string,
}

export enum OperationsNames {
    OPR_1='opr1',
    OPR_2='opr2',
    OPR_3='opr3',
    OPR_4='opr4',
    OPR_5='opr5',
    OPR_6='opr6',
    OPR_7='opr7',
    OPR_8='opr8',
    OPR_9='opr9',
}


export const operations: Array<IOperation> = [
    {
        key: OperationsNames.OPR_1,
        description: 'remove control device',
    },
    {
        key: OperationsNames.OPR_2,
        description: 'dismantle the tubing',
    },
    {
        key: OperationsNames.OPR_3,
        description: 'disassemble the front flange connections',
    },
    {
        key: OperationsNames.OPR_4,
        description: 'disassemble the rear flange connections',
    },
    {
        key: OperationsNames.OPR_5,
        description: 'move the flange away from the body',
    },
    {
        key: OperationsNames.OPR_6,
        description: 'remove spacer ring',
    },
    {
        key: OperationsNames.OPR_7,
        description: 'loosen expansion screws',
    },
    {
        key: OperationsNames.OPR_8,
        description: 'dismantle the housing with the reducing device',
    },
    {
        key: OperationsNames.OPR_9,
        description: 'assemble the pressure regulator',
    },
];