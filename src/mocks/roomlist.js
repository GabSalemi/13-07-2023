export const roomList = [
    {
      id: 1,
      name: "Bella Vista Hotel",
      description: "A luxurious hotel with panoramic ocean views",
      location: "Coastal city",
      price: 200,
      availability: true,
      reviews: [
        { author: "Marco", comment: "Excellent service and spacious rooms" },
        { author: "Giulia", comment: "Friendly staff and delicious breakfast" },
      ],
      imageLocation: "https://picsum.photos/200/300?1",
      amenities: ["Free Wi-Fi", "Swimming pool", "Fitness center"],
      rating: 4.5,
      contact: {
        phone: "+1234567890",
        email: "info@bellavista.com",
      },
      website: "https://www.bellavista.com",
      checkInTime: "15:00",
      checkOutTime: "11:00",
      nearbyAttractions: ["Beach", "Shopping mall", "Fine dining"],
      roomsAvailable: [
        { type: "Standard", price: 200, quantity: 5 },
        { type: "Deluxe", price: 300, quantity: 3 },
      ],
      featured: true,
    },
    {
      id: 2,
      name: "Mountain Green Hotel",
      description: "A cozy hotel nestled in the mountains",
      location: "Mountain area",
      price: 150,
      availability: false,
      reviews: [
        { author: "Luca", comment: "Quiet and relaxing atmosphere" },
        { author: "Simona", comment: "Clean rooms and friendly staff" },
      ],
      imageLocation: "https://picsum.photos/200/300?2",
      amenities: ["Free parking", "Restaurant", "Spa"],
      rating: 4.2,
      contact: {
        phone: "+9876543210",
        email: "info@mountaingreen.com",
      },
      website: "https://www.mountaingreen.com",
      checkInTime: "14:00",
      checkOutTime: "12:00",
      nearbyAttractions: ["Hiking trails", "Ski resort", "Nature reserve"],
      roomsAvailable: [
        { type: "Standard", price: 150, quantity: 8 },
        { type: "Suite", price: 250, quantity: 2 },
      ],
      featured: false,
    },
  ];

  // Access this bin via the API at:

 // https://api.npoint.io/a8298843d4a1a5adab2f

// You can even access nested data directly, like this:

// https://api.npoint.io/a8298843d4a1a5adab2f/0/id