-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "public"."Booking"("createdAt");

-- CreateIndex
CREATE INDEX "Booking_status_idx" ON "public"."Booking"("status");

-- CreateIndex
CREATE INDEX "ParkingSlot_locationId_idx" ON "public"."ParkingSlot"("locationId");
