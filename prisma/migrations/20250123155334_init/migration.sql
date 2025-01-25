/*
  Warnings:

  - Added the required column `department` to the `TimeLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeLog" ADD COLUMN     "department" TEXT NOT NULL;
