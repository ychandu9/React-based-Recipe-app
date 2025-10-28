const recipes = [
  // ---------------- A ----------------
  {
    id: 1,
    name: "Aloo Paratha",
    category: "Breakfast",
    image: "/images/Aloo-paratha.jpg",
    ingredients: ["Wheat flour", "Potatoes", "Chillies", "Spices", "Ghee", "Salt", "Water"],
    process: "To prepare the dough, combine the wheat flour with water and add a pinch of salt, thoroughly kneading it into a smooth dough, and allowing it to rest for 15–20 minutes. To prepare the filling, combine the boiled mashed potatoes with spices, green chilies, and chopped coriander leaves. After that, you can take equal portions of the dough and filling, rolling the dough thinly into small circles, stuffing the filling inside the circle, and sealing it well. Next roll the stuffed dough gently, to form a flat circle, before placing it on a hot tawa. Apply ghee or oil on either side and cook until golden brown. The paratha is now ready to serve warm with yogurt or pickle or butter."
  },
  {
    id: 2,
    name: "Apricot Delight",
    category: "Dessert",
    image: "/images/Apricot_delight.jpeg",
    ingredients: ["Dried apricots", "Almonds", "Honey", "Yogurt", "Cardamom", "Lemon juice"],
    process: "The dried apricots should be soaked in warm water for a period of 30 minutes to begin the recipe preparation. Drain the soaked apricots and place them in a jar. Blend the apricots until a smooth paste develops. In a bowl, combine the apricot paste with chopped nuts, honey, cardamom powder, lemon juice, and salt. Using a spatula, transfer the mixture to the tray and spread it evenly to cover the surface of the tray. Add a layer of desiccated coconut, sprinkling it on top of the fruit and nut mixture. Place the tray into the refrigerator for 1-2 hours to firm before cutting into squares or bars, and serve for a sweet alternative to desserts."
  },
  {
    id: 4,
    name: "Aloo Tikki",
    category: "Snack",
    image: "/images/Aloo_tikki.jpeg",
    ingredients: ["Potatoes", "Bread crumbs", "Spices", "Salt", "Oil"],
    process: " Boil and mash the potatoes, then mix in finely chopped onions, green chilies, coriander leaves, and spices. Shape the mixture into small patties and coat them with bread crumbs. Heat oil in a pan and shallow fry the patties until they are golden brown and crispy on both sides. Serve hot with chutney or ketchup."
  },
  {
    id: 5,
    name: "Aamras",
    category: "Dessert",
    image: "/images/Amaras.webp",
    ingredients: ["Mango pulp", "Sugar", "Cardamom", "Ghee"],
    process: " Peel and chop ripe mangoes, then blend the mango flesh to make a smooth pulp. Add sugar and cardamom powder to the pulp and mix well. Chill the aamras in the refrigerator for a couple of hours before serving. Optionally, you can garnish it with a drizzle of ghee for added richness."
  },

  // ---------------- B ----------------
  {
    id: 6,
    name: "Blueberry Juice",
    category: "Beverage",
    image: "/images/Blueberry-Juice.jpg",
    ingredients: ["Blueberries", "Water", "Sugar", "Lemon juice"],
    process: "Blend all ingredients until smooth, then strain and serve chilled."
  },
  {
    id: 7,
    name: "Bhindi Masala",
    category: "Main Course",
    image: "/images/Bhindi_masala.jpeg",
    ingredients: ["Okra/Bhindi", "Onion", "Tomato", "Spices"],
    process: "Sauté onions and tomatoes with spices, then add sliced bhindi and cook until tender."
  },
  {
    id: 8,
    name: "Besan Ladoo",
    category: "Dessert",
    image: "/images/Besan.jpeg",
    ingredients: ["Gram flour", "Ghee", "Sugar", "Cardamom", "Nuts"],
    process: "Roast gram flour in ghee until golden, mix in sugar and cardamom, then shape into ladoos."
  },
  {
    id: 9,
    name: "Bhel Puri",
    category: "Snack",
    image: "/images/Bhel_puri.jpeg",
    ingredients: ["Murmura", "Chutneys", "Sev", "Onions", "Tomatoes", "Coriander", "Lemon juice","Chaat masala"],
    process: "Mix murmura with chutneys, chopped onions, tomatoes, coriander, and spices. Serve with sev on top."
  },
  {
    id: 10,
    name: "Butter Chicken",
    category: "Main Course",
    image: "/images/Butter_chicken.jpg",
    ingredients: ["Chicken", "Tomato puree", "Butter", "Cream" ,"Spices", "Salt"],
    process: "Marinate chicken with ginger-garlic paste, red chili powder, turmeric, and salt for at least 30 minutes. Heat butter in a pan and sauté the marinated chicken until lightly browned. Add tomato puree, cumin powder, and garam masala, cooking until the chicken is tender and the gravy thickens. Stir in cream and simmer for 5–7 minutes to create a rich, smooth sauce. Garnish with fresh coriander leaves and serve hot with naan, roti, or rice."
  },

  // ---------------- C ----------------
  {
    id: 11,
    name: "Chole Bhature",
    category: "Main Course",
    image: "/images/Chole.jpg",
    ingredients: ["Chickpeas", "Flour", "Spices", "Oil", "Salt", "Water", "Yogurt"],
    process: "Soak chickpeas overnight and cook with spices to make chole. For bhature, knead flour with yogurt and water, roll out, and deep fry until puffed and golden. Serve hot."
  },
  {
    id: 12,
    name: "Chapati",
    category: "Main Course",
    image: "/images/chapati.jpeg",
    ingredients: ["Wheat flour", "Water", "Salt"],
    process: "Knead wheat flour with water and a pinch of salt to form a smooth dough. Divide the dough into small balls, roll them out into thin circles, and cook on a hot tawa until both sides are golden brown. Serve warm with curry or vegetables."
  },
  {
    id: 13,
    name: "Chicken Curry",
    category: "Main Course",
    image: "/images/chicken.jpg",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Spices"],
    process: "Heat oil in a pan and add cumin seeds, letting them splutter. Sauté onions until golden brown, then add ginger-garlic paste and cook for a minute. Add chopped tomatoes and spices (turmeric, chili, coriander) and cook until the oil separates. Mix in the chicken pieces and water, cover, and simmer until the chicken is tender and cooked through. Garnish with fresh coriander leaves and serve hot with rice or roti."
  },
  {
    id: 14,
    name: "Chana Masala",
    category: "Main Course",
    image: "/images/chana.jpg",
    ingredients: ["Chickpeas", "Tomato", "Spices"],
    process: "Cook chickpeas with onions, tomatoes, and spices until thick and flavorful."
  },
  {
    id: 15,
    name: "Coconut Barfi",
    category: "Dessert",
    image: "/images/burfi.webp",
    ingredients: ["Coconut", "Sugar", "Milk"],
    process: "Cook grated coconut with sugar and milk until it thickens, then set and cut into pieces."
  },

  // ---------------- D ----------------
  {
    id: 16,
    name: "Dhokla",
    category: "Snack",
    image: "/images/dhokla.jpeg",
    ingredients: ["Gram flour", "Yogurt", "Spices"],
    process: "Mix gram flour with yogurt and spices, ferment, steam, and temper with mustard seeds and curry leaves."
  },
  {
    id: 17,
    name: "Dal Tadka",
    category: "Main Course",
    image: "/images/dal_tadka.jpeg",
    ingredients: ["Toor dal/Moong dal", "Garlic", "Ghee", "Spices", "Salt"],
    process: "Rinse and cook the lentils with water, turmeric, and salt until soft and mushy. Heat ghee or oil in a pan and add cumin seeds, chopped onions, green chilies, and ginger-garlic paste, sautéing until golden. Add red chili powder and garam masala to the tempering, then pour it over the cooked dal. Mix well and simmer for a few minutes to blend the flavors."
  },
  {
    id: 18,
    name: "Dosa",
    category: "Breakfast",
    image: "/images/dosa.webp",
    ingredients: ["Rice", "Urad dal", "Salt"],
    process: "Soak rice and urad dal separately for 4-6 hours, then grind to a smooth batter. Ferment the batter overnight. Heat a non-stick pan, pour a ladle of batter, and spread it thinly in a circular motion. Drizzle oil around the edges and cook until golden and crisp. Serve hot with chutney and sambar."
  },
  {
    id: 20,
    name: "Double Ka Meetha",
    category: "Dessert",
    image: "/images/meetha.webp",
    ingredients: ["Bread", "Milk", "Sugar", "Dry fruits"],
    process: "Fry bread slices in ghee, soak in sweetened milk, and garnish with dry fruits."
  },

  // ---------------- E ----------------
  {
    id: 21,
    name: "Egg Curry",
    category: "Main Course",
    image: "/images/eggcurry.webp",
    ingredients: ["Eggs", "Tomatoes", "Spices"],
    process: "Boil eggs, prepare a spicy tomato gravy, and simmer eggs in the gravy."
  },
  {
    id: 22,
    name: "Elaichi Tea",
    category: "Beverage",
    image: "/images/tea.jpg",
    ingredients: ["Tea leaves", "Milk", "Cardamom", "Sugar"],
    process: "Boil all ingredients together and strain."
  },
  {
    id: 23,
    name: "Egg Biryani",
    category: "Main Course",
    image: "/images/eggb.jpg",
    ingredients: ["Eggs", "Rice", "Spices"],
    process: "Rinse and cook the basmati rice until 70–80% done, then drain and set aside. Heat oil or ghee in a pan, sauté cumin seeds and sliced onions until golden, then add ginger-garlic paste, tomatoes, green chilies, turmeric, red chili powder, and salt. Stir in yogurt and cook for 2–3 minutes, then add boiled eggs and coat them with the masala. Layer the partially cooked rice over the egg mixture, sprinkle garam masala, fresh coriander, and mint leaves, and cover to cook on low heat for 10–15 minutes. Serve hot with raita or salad."
  },
  {
    id: 24,
    name: "Egg Bhurji",
    category: "Main Course",
    image: "/images/eggbhurji.jpg",
    ingredients: ["Eggs", "Onion", "Tomato", "Spices"],
    process: "Heat oil or butter in a pan and add cumin seeds, letting them splutter. Sauté chopped onions and green chilies until onions turn translucent. Add chopped tomatoes, turmeric, red chili powder, and salt, cooking until the tomatoes soften. Beat the eggs and pour them into the pan, stirring continuously to scramble them evenly. Garnish with fresh coriander leaves and serve hot with roti, bread, or pav."
  },
  {
    id: 25,
    name: "Egg Puff",
    category: "Snack",
    image: "/images/eggpuff.jpeg",
    ingredients: ["Puff pastry", "Boiled egg", "Spices"],
    process: "Heat oil in a pan and sauté onions, capsicum, and ginger-garlic paste until soft. Add chopped boiled eggs, black pepper, red chili powder, and salt, mixing well to make the filling. Preheat the oven to 200°C (400°F) and roll out the puff pastry sheets. Place the egg filling in the center of each sheet, fold and seal the edges, and brush with beaten egg for a golden finish. Bake for 20–25 minutes until puffed and golden brown, then serve warm."
  },

  // ---------------- F ----------------
  {
    id: 26,
    name: "Falooda",
    category: "Dessert",
    image: "/images/falooda.jpeg",
    ingredients: ["Vermicelli", "Basil seeds", "Rose syrup", "Milk"],
    process: "Cook vermicelli, soak basil seeds, layer with rose syrup and chilled milk, and top with ice cream."
  },
  {
    id: 27,
    name: "Fish Curry",
    category: "Main Course",
    image: "/images/fish.jpg",
    ingredients: ["Fish", "Coconut milk", "Spices"],
    process: "Heat oil in a pan and add mustard seeds, letting them splutter. Sauté onions, green chilies, and ginger-garlic paste until onions turn golden. Add chopped tomatoes, turmeric, red chili, and coriander powder, cooking until the oil separates. Gently add fish fillets and pour in coconut milk, simmering on low heat until the fish is cooked through. Garnish with fresh coriander leaves and serve hot with steamed rice."
  },
  {
    id: 28,
    name: "Fruit Chaat",
    category: "Snack",
    image: "/images/fruit.jpg",
    ingredients: ["Fruits", "Chaat masala", "Lemon juice"],
    process: "Toss fruits with masala and lemon juice."
  },
  {
    id: 29,
    name: "Fried Rice",
    category: "Main Course",
    image: "/images/fried.jpeg",
    ingredients: ["Cooked rice", "Vegetables", "Soy sauce", "Spices"],
    process: "Heat oil in a wok or large pan and sauté chopped garlic and onions until fragrant. Add mixed vegetables and stir-fry on high heat for 2–3 minutes until slightly tender but crisp. Add the cooked rice, soy sauce, vinegar, black pepper, and salt, tossing everything well. Stir-fry for another 2–3 minutes to blend the flavors evenly. Garnish with chopped spring onions and serve hot with manchurian or gravy of your choice."
  },

// ---------------- G ----------------
{
  id: 31,
  name: "Gajar Halwa",
  category: "Dessert",
  image: "/images/chalwa.jpeg",
  ingredients: ["Carrots", "Milk", "Sugar", "Ghee", "Cardamom"],
  process: "Grate carrots and cook in milk until soft. Add sugar, ghee, and cardamom, and cook until thickened."
},
{
  id: 32,
  name: "Gobi Manchurian",
  category: "Snack",
  image: "/images/gobi.jpeg",
  ingredients: ["Cauliflower", "Cornflour", "Soy sauce", "Garlic"],
  process: "Blanch cauliflower florets in hot water for a few minutes, then drain. Make a thick batter using all-purpose flour, cornflour, salt, pepper, and water, and coat the florets evenly. Deep-fry them until golden and crisp, then set aside. In another pan, heat a little oil and sauté onions, capsicum, and ginger-garlic paste, then add soy sauce, chili sauce, ketchup, and mix well. Toss the fried cauliflower in this sauce until coated, garnish with spring onions, and serve hot."
},
{
  id: 33,
  name: "Gulab Jamun",
  category: "Dessert",
  image: "/images/Gulab.jpeg",
  ingredients: ["Gulab jamun powder", "Sugar syrup", "Cardamom", "Ghee", "Milk"],
  process: "Mix milk powder, flour, baking soda, and ghee, then add milk gradually to make a soft, smooth dough. Divide into small, crack-free balls and set aside. In a pan, prepare sugar syrup by boiling sugar, water, cardamom powder, and rose water for about 5–7 minutes, then keep it warm. Deep-fry the balls on low heat until golden brown. Soak them immediately in warm syrup for at least 30 minutes before serving soft, syrupy Gulab Jamuns."
},
{
  id: 34,
  name: "Ghee Rice",
  category: "Main Course",
  image: "/images/ghee.jpg",
  ingredients: ["Rice", "Ghee", "Cashews", "Spices"],
  process: "Cook rice in ghee with mild spices and nuts."
},


// ---------------- H ----------------
{
  id: 36,
  name: "Hyderabadi Biryani",
  category: "Main Course",
  image: "/images/biryani.jpg",
  ingredients: ["Rice", "Mutton or chicken", "Yogurt", "Spices"],
  process: "Marinate the chicken or mutton with yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, and salt for at least 1–2 hours. Parboil basmati rice with whole spices and salt until 70% cooked, then drain. In a heavy-bottomed pot, spread marinated meat at the base, layer with fried onions, mint, coriander, and half-cooked rice. Drizzle saffron milk and ghee on top, seal the lid with dough, and cook on low heat (dum) for 30–40 minutes. Mix gently before serving and enjoy with raita or mirchi ka salan."
},
{
  id: 37,
  name: "Halwa Puri",
  category: "Breakfast",
  image: "/images/puri.jpg",
  ingredients: ["Semolina", "Flour", "Sugar", "Ghee"],
  process: "Prepare the halwa first by roasting semolina in ghee until golden and fragrant. Boil water with sugar, cardamom, saffron, and raisins, then slowly add roasted semolina while stirring to avoid lumps; cook until thick and soft, then garnish with nuts. For puris, knead wheat flour with salt and water into a firm dough, rest for 15 minutes, and roll into small discs. Deep-fry in hot oil until puffed and golden brown. Serve the warm puris with halwa for a traditional, festive breakfast treat."
},
{
  id: 39,
  name: "Hariyali Chicken",
  category: "Main Course",
  image: "/images/gchicken.jpg",
  ingredients: ["Chicken", "Coriander", "Mint", "Yogurt"],
  process: "Cook chicken marinated in green herb paste."
},


// ---------------- I ----------------
{
  id: 41,
  name: "Idli",
  category: "Breakfast",
  image: "/images/idli.jpg",
  ingredients: ["Rice", "Urad dal", "Salt"],
  process: "Ferment batter and steam until fluffy."
},
{
  id: 42,
  name: "Imarti",
  category: "Snack",
  image: "/images/imarti.jpg",
  ingredients: ["Urad dal", "Sugar syrup", "Ghee"],
  process: "Pipe batter into oil and soak in sugar syrup."
},

{
  id: 44,
  name: "Irani Chai",
  category: "Beverage",
  image: "/images/chai.webp",
  ingredients: ["Tea leaves", "Milk", "Condensed milk"],
  process: "Boil tea with milk and condensed milk until thick."
},
{
  id: 45,
  name: "Indian Omelette",
  category: "Breakfast",
  image: "/images/omlette.jpeg",
  ingredients: ["Eggs", "Onion", "Chilli", "Coriander"],
  process: "Beat eggs with veggies and fry on pan."
},

// ---------------- J ----------------
{
  id: 46,
  name: "Jalebi",
  category: "Dessert",
  image: "/images/jalebi.webp",
  ingredients: ["Flour", "Yogurt", "Sugar syrup"],
  process: "Ferment batter, fry spirals, and soak in syrup."
},
{
  id: 47,
  name: "Jeera Rice",
  category: "Main Course",
  image: "/images/jeera.png",
  ingredients: ["Basmati rice", "Cumin seeds", "Ghee"],
  process: "Fry cumin in ghee, add rice, and cook until fluffy."
},

// ---------------- K ----------------
{
  id: 51,
  name: "Kheer",
  category: "Dessert",
  image: "/images/kheer.avif",
  ingredients: ["Rice", "Milk", "Sugar", "Cardamom"],
  process: "Boil rice with milk and sugar until creamy."
},
{
  id: 52,
  name: "Kachori",
  category: "Snack",
  image: "/images/kachori.jpeg",
  ingredients: ["Flour", "Urad dal", "Spices"],
  process: "Stuff spiced dal mixture in dough and deep fry."
},

{
  id: 54,
  name: "Kulfi",
  category: "Dessert",
  image: "/images/kulfi.jpeg",
  ingredients: ["Milk", "Sugar", "Pistachio"],
  process: "Boil thickened milk, flavor, and freeze in molds."
},
{
  id: 55,
  name: "Khichdi",
  category: "Main Course",
  image: "/images/kichidi.jpg",
  ingredients: ["Rice", "Lentils", "Ghee", "Spices"],
  process: "Cook rice and dal together until soft."
},

// ---------------- L ----------------
{
  id: 56,
  name: "Lassi",
  category: "Beverage",
  image: "/images/lassi.jpg",
  ingredients: ["Yogurt", "Sugar", "Cardamom"],
  process: "Blend yogurt with sugar and serve chilled."
},
{
  id: 57,
  name: "Lemon Rice",
  category: "Main Course",
  image: "/images/lemon.jpg",
  ingredients: ["Rice", "Lemon juice", "Mustard seeds", "Curry leaves"],
  process: "Mix cooked rice with tempered mustard seeds and lemon."
},
// ---------------- M ----------------
{
  id: 61,
  name: "Masala Dosa",
  category: "Breakfast",
  image: "/images/masala.jpg",
  ingredients: ["Rice", "Urad dal", "Potatoes"],
  process: "Stuff spiced potatoes inside crispy dosa."
},
{
  id: 62,
  name: "Malai Kofta",
  category: "Main Course",
  image: "/images/malai.jpg",
  ingredients: ["Paneer", "Potatoes", "Cream", "Tomatoes"],
  process: "Fry paneer balls and cook in creamy gravy."
},
{
  id: 63,
  name: "Mysore Pak",
  category: "Dessert",
  image: "/images/mysorepak.webp",
  ingredients: ["Besan", "Sugar", "Ghee"],
  process: "Cook besan with ghee and sugar until set."
},
{
  id: 64,
  name: "Momo",
  category: "Snack",
  image: "/images/momo.webp",
  ingredients: ["Flour", "Vegetable stuffing"],
  process: "Steam filled dumplings and serve with chutney."
},
{
  id: 65,
  name: "Mutton Curry",
  category: "Main Course",
  image: "/images/mutton.jpg",
  ingredients: ["Mutton", "Onions", "Tomatoes", "Spices"],
  process: "Slow cook mutton with rich masala base."
},

// ---------------- N ----------------
{
  id: 66,
  name: "Naan",
  category: "Main Course",
  image: "/images/naan.jpeg",
  ingredients: ["Flour", "Yogurt", "Yeast"],
  process: "Bake soft Indian bread in tandoor or pan."
},
{
  id: 67,
  name: "Navratan Korma",
  category: "Main Course",
  image: "/images/korma.webp",
  ingredients: ["Mixed vegetables", "Cream", "Spices"],
  process: "Cook veggies in mildly sweet creamy sauce."
},


{
  id: 70,
  name: "Nariyal Chutney",
  category: "Condiment",
  image: "/images/chutney.jpg",
  ingredients: ["Coconut", "Green chillies", "Curry leaves"],
  process: "Blend coconut with spices and temper."
},

// ---------------- O ----------------
{
  id: 71,
  name: "Onion Pakoda",
  category: "Snack",
  image: "/images/pakoda.jpg",
  ingredients: ["Onions", "Gram flour", "Spices"],
  process: "Coat onion rings and deep fry until crisp."
},
{
  id: 72,
  name: "Oats Upma",
  category: "Breakfast",
  image: "/images/upma.jpeg",
  ingredients: ["Oats", "Vegetables", "Spices"],
  process: "Cook roasted oats with veggies and seasoning."
},
{
  id: 73,
  name: "Orange Kheer",
  category: "Dessert",
  image: "/images/orangek.jpeg",
  ingredients: ["Milk", "Sugar", "Orange pulp"],
  process: "Mix orange pulp with cooled kheer."
},
{
  id: 74,
  name: "Omelette Curry",
  category: "Main Course",
  image: "/images/omlettecu.jpg",
  ingredients: ["Eggs", "Tomatoes", "Spices"],
  process: "Cook omelette pieces in spicy curry base."
},

// ---------------- P ----------------
{
  id: 75,
  name: "Putharekulu",
  category: "Dessert",
  image: "/images/putharekhulu.webp",
  ingredients: ["Rice flour", "Jaggery", "Ghee"],
  process: "Make thin rice flour crepes and fill with jaggery."
},
{
  id: 76,
  name: "Pav Bhaji",
  category: "Main Course",
  image: "/images/pav.jpg",
  ingredients: ["Mixed veggies", "Butter", "Pav buns"],
  process: "Mash veggies in spicy gravy and serve with toasted pav."
},
{
  id: 77,
  name: "Pani Puri",
  category: "Snack",
  image: "/images/panipuri.webp",
  ingredients: ["Semolina puris", "Spicy water", "Potato filling"],
  process: "Fill puris with spiced water and fillings."
},
{
  id: 78,
  name: "Palak Paneer",
  category: "Main Course",
  image: "/images/paneer.jpeg",
  ingredients: ["Spinach", "Paneer", "Cream"],
  process: "Cook paneer in pureed spinach sauce."
},
{
  id: 79,
  name: "Pesarattu",
  category: "Breakfast",
  image: "/images/pesarattu.webp",
  ingredients: ["Green gram", "Spices"],
  process: "Grind soaked moong dal and cook like dosa."
},
{
  id: 80,
  name: "Pongal",
  category: "Breakfast",
  image: "/images/pongal.jpg",
  ingredients: ["Rice", "Moong dal", "Pepper", "Ghee"],
  process: "Cook rice and dal together and temper with ghee."
},

// ---------------- Q ----------------
{
  id: 81,
  name: "Quinoa Upma",
  category: "Breakfast",
  image: "/images/qupma.jpg",
  ingredients: ["Quinoa", "Vegetables", "Spices"],
  process: "Cook quinoa with sautéed veggies and spices."
},
{
  id: 85,
  name: "Quick Poha",
  category: "Breakfast",
  image: "/images/poha.jpg",
  ingredients: ["Flattened rice", "Onions", "Peanuts"],
  process: "Saute poha with onions, peanuts, and mustard seeds."
},

// ---------------- R ----------------
{
  id: 86,
  name: "Rasgulla",
  category: "Dessert",
  image: "/images/rasgulla.webp",
  ingredients: ["Chenna", "Sugar syrup"],
  process: "Boil chenna balls in sugar syrup until spongy."
},
{
  id: 88,
  name: "Rajma Chawal",
  category: "Main Course",
  image: "/images/rajma.jpeg",
  ingredients: ["Kidney beans", "Rice", "Spices"],
  process: "Serve cooked rajma curry with steamed rice."
},
{
  id: 89,
  name: "Rava Kesari",
  category: "Dessert",
  image: "/images/kesari.webp",
  ingredients: ["Semolina", "Sugar", "Ghee", "Saffron"],
  process: "Roast rava and cook with sugar syrup and ghee."
},
{
  id: 90,
  name: "Rasam",
  category: "Soup",
  image: "/images/rsam.webp",
  ingredients: ["Tamarind", "Tomato", "Spices"],
  process: "Boil tamarind water with rasam powder and tomatoes."
},

// ---------------- S ----------------
{
  id: 91,
  name: "Samosa",
  category: "Snack",
  image: "/images/samosa.webp",
  ingredients: ["Potato filling", "Flour", "Oil"],
  process: "Stuff spicy potato mix in dough and deep fry."
},
{
  id: 92,
  name: "Seviyan Kheer",
  category: "Dessert",
  image: "/images/payasam.jpg",
  ingredients: ["Vermicelli", "Milk", "Sugar"],
  process: "Cook roasted vermicelli with milk and sugar."
},
{
  id: 93,
  name: "Spinach and Cheese Bombs",
  category: "Snack",
  image: "/images/bobs.jpeg",
  ingredients: ["Spinach", "Cheese", "Bread crumbs", "Spices"],
  process: "Stuff spinach and cheese mixture in dough, coat with bread crumbs, and deep fry."
},
{
  id: 94,
  name: "Stuffed Paneer Tikka",
  category: "Appetizer",
  image: "/images/paneer_tikka.jpeg",
  ingredients: ["Paneer", "Capsicum", "Onion", "Spices"],
  process: "Stuff paneer, capsicum, and onion in skewers, marinate, and grill."
},
{
  id: 95,
  name: "Shahi Paneer",
  category: "Main Course",
  image: "/images/spaneer.jpg",
  ingredients: ["Paneer", "Cream", "Cashews", "Spices"],
  process: "Cook paneer cubes in creamy cashew sauce."
},

// ---------------- T ----------------
{
  id: 96,
  name: "Tandoori Chicken",
  category: "Main Course",
  image: "/images/tandoori.webp",
  ingredients: ["Chicken", "Yogurt", "Spices"],
  process: "Marinate chicken and grill until smoky."
},
{
  id: 97,
  name: "Tomato Soup",
  category: "Soup",
  image: "/images/tomato_soup.jpg",
  ingredients: ["Tomatoes", "Onion", "Garlic", "Spices"],
  process: "Sauté onions and garlic, add tomatoes and spices, and blend into a soup."
},
{
  id: 98,
  name: "Chicken Tikka Masala",
  category: "Main Course",
  image: "/images/chicken_tikka.jpeg",
  ingredients: ["Chicken ", "Yogurt", "Spices"],
  process: "Marinate in spices, grill, and simmer in creamy tomato sauce."
},
{
  id: 99,
  name: "Turmeric Rice",
  category: "Main Course",
  image: "/images/turmeric_rice.jpg",
  ingredients: ["Rice", "Turmeric", "Spices"],
  process: "Cook rice with turmeric and spices for color and flavor."
},

// ---------------- U ----------------
{
  id: 101,
  name: "Upma",
  category: "Breakfast",
  image: "/images/upmaa.jpeg",
  ingredients: ["Semolina", "Vegetables", "Spices"],
  process: "Roast rava and cook with veggies and water."
},
{
  id: 102,
  name: "Uttapam",
  category: "Breakfast",
  image: "/images/uttapam.webp",
  ingredients: ["Dosa batter", "Onions", "Tomatoes"],
  process: "Spread batter and top with veggies."
},

// ---------------- V ----------------
{
  id: 106,
  name: "Vada Pav",
  category: "Snack",
  image: "/images/vadapav.png",
  ingredients: ["Potatoes", "Gram flour", "Bread buns", "Chutneys"],
  process: "Place fried potato vada inside pav with chutneys."
},
{
  id: 107,
  name: "Vegetable Pulao",
  category: "Main Course",
  image: "/images/pulav.jpeg",
  ingredients: ["Basmati rice", "Mixed vegetables", "Spices"],
  process: "Cook rice with sautéed vegetables and spices."
},
{
  id: 108,
  name: "Veg Manchurian",
  category: "Snack",
  image: "/images/manchuria.jpeg",
  ingredients: ["Cabbage", "Carrot", "Soy sauce", "Corn flour"],
  process: "Make veggie balls, fry, and toss in spicy sauce."
},

{
  id: 110,
  name: "Vegetable Cutlet",
  category: "Snack",
  image: "/images/cutlet.jpg",
  ingredients: ["Potatoes", "Carrots", "Bread crumbs", "Spices"],
  process: "Shape spiced veggie mixture and shallow fry."
},

// ---------------- W ----------------
{
  id: 112,
  name: "Wada Sambhar",
  category: "Snack",
  image: "/images/vada.jpeg",
  ingredients: ["Urad dal", "Spices", "Tamarind", "Vegetables"],
  process: "Fry vadas and serve soaked in sambhar."
},
{
  id: 113,
  name: "White Sauce Pasta (Indian style)",
  category: "Main Course",
  image: "/images/pasta.jpg",
  ingredients: ["Pasta", "Milk", "Flour", "Cheese"],
  process: "Cook pasta, make creamy white sauce, mix and serve."
},
{
  id: 114,
  name: "Watermelon Juice",
  category: "Beverage",
  image: "/images/watermelon.jpeg",
  ingredients: ["Watermelon", "Mint", "Lemon juice"],
  process: "Blend ingredients and serve chilled."
},

{
  id: 120,
  name: "Xmas Cake (Indian Style)",
  category: "Dessert",
  image: "/images/cake.jpg",
  ingredients: ["Flour", "Dry fruits", "Spices"],
  process: "Bake spiced fruit cake soaked in rum essence."
},

// ---------------- Y ----------------
{
  id: 122,
  name: "Yogurt Rice",
  category: "Main Course",
  image: "/images/curd.jpg",
  ingredients: ["Rice", "Curd", "Mustard seeds", "Curry leaves"],
  process: "Mix cooked rice with curd and temper with spices."
},


// ---------------- Z ----------------

{
  id: 127,
  name: "Zafrani Chicken",
  category: "Main Course",
  image: "/images/zafrani.jpg",
  ingredients: ["Chicken", "Saffron", "Milk", "Dry fruits"],
  process: "Cook chicken with saffron milk and dry fruits."
},
];
export default recipes;




