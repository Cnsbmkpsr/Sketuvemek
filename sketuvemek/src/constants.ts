let today: Date = new Date();

let earlierDate: Date = new Date();
earlierDate.setDate(today.getDate() - 95);

export const unixTimestampToday: number = Math.floor(today.getTime() / 1000);
export const unixTimestampEarlierDate: number = Math.floor(earlierDate.getTime() / 1000);

export type CoinInfoState = {
    image: object | undefined,
    name: string | undefined,
    symbol: string | undefined
};