import Dexie from "dexie";

export const db = new Dexie("TradingJournal");

db.version(1).stores({
    trades: "++id",
});