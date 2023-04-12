export interface IOperation {
    key: string,
    description: string,
}

export const operations: Array<IOperation> = [
    {
        key: 'opr1',
        description: 'remove control device',
    },
    {
        key: 'opr2',
        description: 'dismantle the tubing',
    },
    {
        key: 'opr3',
        description: 'disassemble the front flange connections',
    },
    {
        key: 'opr4',
        description: 'disassemble the rear flange connections',
    },
    {
        key: 'opr5',
        description: 'move the flange away from the body',
    },
    {
        key: 'opr6',
        description: 'remove spacer ring',
    },
    {
        key: 'opr7',
        description: 'loosen expansion screws',
    },
    {
        key: 'opr8',
        description: 'dismantle the housing with the reducing device',
    },
    {
        key: 'opr9',
        description: 'assemble the pressure regulator',
    },
];