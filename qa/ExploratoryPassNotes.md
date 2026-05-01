Golden Path/Happy Path

Navigation & Page Loading flows:
1. Main booking page loads without issues
2. User views available rooms under 'Our Rooms'
3. User selects <Book now> that redirects to the room page form
4. User fills the calendar availablity and cliking <Reserve Now> opens the personal details form
5. User fills personal details forms and room booking is submitted when clicking <Reserve Now>
6. Booking confirmation is accurate with selected dates

Calendar Availability Flows:
1. Check-in and Check-out dates selection
2. Navigation through future dates

Room Listing (Our Rooms) flows:
1. At least 3 rooms should be displayed under Our Rooms section
2. Rooms images and descriptions loads correctly
3. The <Book now> button exists on each room card and redirects user to the selected room page

Location Details:
1. Hotel information (hotel name, address, phone number, email) are displayed
2. The map image loads and shows the correct location

Send Us a Message contact form flows:
1. Message with valid fields can be submitted successfully

Booking confirmation flows:
1. Booking confirmation shows the correct dates selected

Negative/Error flows:
1. Check-in dates older than the check-out should not allow bookings
2. Messages without filled fields should be prevented to be submitted
3. Past dates in the check-in should not be selectable

Edge Cases flows:
1. Calendar check-in and check-out on the same day
2. Trying to book with no dates selected
3. Submitting the message form twice quickly
4. Submitting the room booking form twice quickly
5. Refreshing the page after the booking confirmation is shown
6. Maximum booking window in the calendar availability flows

----------------------------------------------------
Bugs found:
1. [bug-id-001][LB] The <Amenities> button is not functional
2. [bug-id-002][LB] Check-in dates can be older then the Check-out without throwing any warnings or roadblocks to users
3. 