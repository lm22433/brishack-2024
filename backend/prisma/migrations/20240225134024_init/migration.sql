-- CreateTable
CREATE TABLE "VapeSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "sessionStart" DATETIME NOT NULL,
    "sessionEnd" DATETIME NOT NULL,
    CONSTRAINT "VapeSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VapeIntake" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vapeSessionId" INTEGER NOT NULL,
    CONSTRAINT "VapeIntake_vapeSessionId_fkey" FOREIGN KEY ("vapeSessionId") REFERENCES "VapeSession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
