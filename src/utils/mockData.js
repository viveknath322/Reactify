const restaurantList = [
    {
      info: {
        id: "10894",
        name: "Pizza Hut",
        cloudinaryImageId: "lczhp9lptdzbqn09nfns",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
      },
    },
    {
      info: {
        id: "211192",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "lczhp9lptdzbqn09nfns",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 3.5,
      },
    },
    {
      info: {
        id: "477963",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 3.8,
      },
    },
    {
      info: {
        id: "23683",
        name: "McDonald's",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.2,
      },
    },
    {
      info: {
        id: "255038",
        name: "Andhra Gunpowder",
        cloudinaryImageId: "e996wruqpmrrrqglp7hs",
        costForTwo: "₹350 for two",
        cuisines: ["Andhra", "Biryani", "South Indian"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "240178",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_240178.jpg",
        costForTwo: "₹300 for two",
        cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "290271",
        name: "Thalairaj Biryani",
        cloudinaryImageId: "qf8lwn0ehi8sgvjvsi2l",
        costForTwo: "₹300 for two",
        cuisines: ["Andhra", "Biryani", "Hyderabadi", "South Indian", "Indian", "Beverages"],
        avgRating: 4.2,
      },
    },
    {
      info: {
        id: "17312",
        name: "KFC",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17312.JPG",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.1,
      },
    },
    {
      info: {
        id: "49704",
        name: "California Burrito",
        cloudinaryImageId: "p57honbbzdgf7tyt2vay",
        costForTwo: "₹250 for two",
        cuisines: ["Mexican", "American", "Salads", "Continental", "Keto", "Healthy Food", "Desserts"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "246645",
        name: "Great Indian Khichdi by EatFit",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        costForTwo: "₹200 for two",
        cuisines: ["Home Food", "Indian", "North Indian", "Healthy Food", "Snacks", "Desserts", "Rajasthani", "South Indian", "Maharashtrian", "Sweets"],
        avgRating: 4.2,
      },
    },
    {
      info: {
        id: "643652",
        name: "WeFit - Protein Bowls, Salads & Sandwiches",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643652.JPG",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
        avgRating: 4.4,
      },
    },
    {
      info: {
        id: "750212",
        name: "Daily Kitchen - Homely Meals",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750212.JPG",
        costForTwo: "₹400 for two",
        cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "390045",
        name: "NH1 Bowls - Highway To North",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/8dd09eab-b40e-43ed-b46d-c88f50e450a3_390045.JPG",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Punjabi", "Home Food"],
        avgRating: 4.6,
      },
    },
    {
      info: {
        id: "374525",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "npp2m7tuszixwcc69pqd",
        costForTwo: "₹300 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.6,
      },
    },
    {
      info: {
        id: "758321",
        name: "NIC Ice Creams",
        cloudinaryImageId: "5bbe809ee274743ba5e09eab110cd813",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.9,
      },
    },
    {
      info: {
        id: "590119",
        name: "Bakingo",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/11e95f9e-ba33-472c-85ae-ed6d5c289992_590119.JPG",
        costForTwo: "₹299 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "399138",
        name: "Aubree",
        cloudinaryImageId: "65faa4b5046cb2215fe285a8b96c9bd7",
        costForTwo: "₹700 for two",
        cuisines: ["Bakery", "Italian", "Snacks", "Desserts"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "108097",
        name: "Ambur Star Briyani Since 1890",
        cloudinaryImageId: "yktanq9i7yfjrixaghuj",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "622017",
        name: "MOJO Pizza - 2X Toppings",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/0fbf3dd4-03fc-403e-b861-6d7455bcb69b_622017.JPG",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "558760",
        name: "HRX by EatFit",
        cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
        costForTwo: "₹450 for two",
        cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
        avgRating: 4.3,
      },
    },
  ];
  
  export default restaurantList;