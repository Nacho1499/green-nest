interface blog {
  id: string;
  image: string;
  date: string;
  topic: string;
  info: string;
}

export const blogs: blog[] = [
  {
    id: "1",
    image: "/blog3.jpg",
    date: "21/11/2025",
    topic: "New Season, New Growth 🌱",
    info: "Spring is the perfect time to refresh your indoor plants. With longer daylight hours and warmer temp.",
  },
  {
    id: "2",
    image: "/blog4.jpg",
    date: "21/1/2026",
    topic: "Easy Plants for Busy Homes 🍃",
    info: "Low-maintenance plants like snake plants, pothos, and ZZ plants continue to be favorites among our customers.",
  },
  {
    id: "3",
    image: "/blog2.jpg",
    date: "21/4/2025",
    topic: "How  Plants Improve Space 🌿",
    info: "Indoor plants don’t just look good—they help create a calmer, more welcoming environment.",
  },
  {
    id: "4",
    image: "/blog1.jpg",
    date: "2/1/2026",
    topic: "Plant Care Tips This Month 🌼",
    info: "As the weather changes, remember to adjust your watering routine. Always check the soil before watering.",
  },
];
