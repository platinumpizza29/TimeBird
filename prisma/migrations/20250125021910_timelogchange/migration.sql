/*
  Warnings:

  - Added the required column `type` to the `TimeLog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('OVERTIME', 'VACATION', 'SICK', 'HOLIDAY', 'CONTRACT');

-- AlterTable
ALTER TABLE "TimeLog" ADD COLUMN     "type" "Type" NOT NULL;
