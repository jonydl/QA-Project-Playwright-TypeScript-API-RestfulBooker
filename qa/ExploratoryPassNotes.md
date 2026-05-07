# UI Tests: validade user flows (end-to-end)

## Core User Journey (P0)
1. [ ] User check-in/out dates are inserted and lists all available rooms within the date range
2. [ ] User redirects to the correct room page when <Book now> is pressed
    dates are auto filled with the date range previously selected
3. [ ] User reserve the room by filling form details
    First name, Last name, Email, Phone number
4. [ ] Room is reserved showing the booking confirmation with selected dates


## Supporting Flow Node (P1)
1. [ ] Message is submitted successfully via the contact form when fields are inserted correctly


## Sanity Checks (P2)
1. [ ] Home page load without issues
2. [ ] All room pages loads without issues
    Showing the calendar, room description, features, room policies, etc
3. [ ] Company location and contact information is accurate in the <Contact> section
    (hotel name, address, phone number, email) are displayed
4. [ ] The <Book now> button exists on each room card and redirects user to the selected room page
5. [ ] Room reservation flow can be cancelled returning the user to room calendar
6. [ ] Section 'Similar Rooms You Might Like' must be displayed at the bottom of any room page


## Negative/Error flows (P1-P2)
1. [ ] Check-in dates older than the check-out should not allow bookings
2. [ ] Messages with empty fields should be prevented from submitting
3. [ ] Past dates are not allowed to select in the check-in/out dates
4. [ ] Submitting the message form twice quickly
5. [ ] Submitting the room booking form twice quickly
6. [ ] Refreshing the page after the booking confirmation


## Edge Cases flows (P2-P3)
1. [ ] Calendar check-in and check-out on the same day
2. [ ] Trying to book with no dates selected
3. [ ] Maximum booking window in the calendar availability flows
4. [ ] Calendar Check-in and Check-out long range dates selection
5. [ ] Calendar navigation through future dates
6. [ ] Calendar date range can be changed from the previous selection in the reserving the room page
7. [ ] Top buttons redirect to their respective pages (Rooms, Booking, Amenities, Location, Contact, Admin)

----------------------------------------------------------

# API Tests: validate business logic and data integrity

## Rooms availability (P0) - availability.spec.ts
1. [x] Valid booking request
2. [ ] Reject invalid date range (check-in -> check-out)
3. [ ] Validade missing dates
4. [ ] Prevent past dates

## Booking Rooms Flow (P0) - rooms.spec.ts
1. [ ] Successful booking
2. [ ] Invalid payload (missing fields, invalid email input)
3. [ ] Double booking prevention
4. [ ] Booking unavailable room
5. [ ] Data persistence (booking exists after creation)

## Contact (P1) - contact.spec.ts
1. [ ] Valid message
2. [ ] Empty fields

## API Validation Rules
- Validate status codes (200, 400, 401)
- Validate response schema (required fields)
- Validate data consistency (UI vs API)

----------------------------------------------------------

# UI + API integration: cross-validation of results

----------------------------------------------------------

# Bugs Found:
1. [bug-id-001][LB] The <Amenities> button is not functional
2. [bug-id-002][LB] Check-in dates can be older then the Check-out without throwing any warnings or roadblocks to users
3. [bug-id-003][MID] Social media buttons does not redirect to the respective socials