import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { app } from "./firebase";

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

if (typeof location !== "undefined" && location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(database, "127.0.0.1", 9000);
}
