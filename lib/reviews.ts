interface review {
  name: string;
  testimonial: string;
  image: string;
  id: string;
}

export const reviews: review[] = [
  {
    id: "1",
    name: "John kadiri",
    testimonial:
      "GreenNest made plant shopping so easy. My plants arrived fresh and instantly transformed.",
    image: "/review2.jpg",
  },
  {
    id: "2",
    name: "Divine agu",
    testimonial:
      "I’m not great with plants, but GreenNest’s low-maintenance options are perfect.",
    image: "/review3.jpg",
  },
  {
    id: "3",
    name: "Ada okeke",
    testimonial:
      "Beautiful plants, fast delivery, and great quality. GreenNest exceeded my expectations.",
    image: "/review1.jpg",
  },
  {
    id: "4",
    name: "Mary emeka",
    testimonial:
      "My home feels more alive thanks to GreenNest. Every plant arrived healthy and well packaged.",
    image: "/review4.jpg",
  },
];
