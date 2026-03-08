import type { User, Trip, Comment } from "./travelStore";

const users: User[] = [
  {
    id: "u1",
    name: "Анастасия",
    avatarColor: "#2563eb",
    homeCity: "Москва",
  },
  {
    id: "u2",
    name: "Иван",
    avatarColor: "#0ea5e9",
    homeCity: "Санкт‑Петербург",
  },
  {
    id: "u3",
    name: "Мария",
    avatarColor: "#6366f1",
    homeCity: "Казань",
  },
];

let trips: Trip[] = [
  {
    id: "t1",
    userId: "u1",
    title: "Весенний Стамбул",
    city: "Стамбул",
    country: "Турция",
    startDate: "2025-04-10",
    endDate: "2025-04-16",
    days: 7,
    approximateCost: 88000,
    currency: "₽",
    rating: 5,
    coverImage:
      "https://media.istockphoto.com/id/1327842864/ru/фото/голубая-мечеть-стамбула-знаменитое-место-посещения-турция.jpg?s=1024x1024&w=is&k=20&c=U7E2joF7VGV_YDYba0iKhEDS4tPUv18HYz3X7NJkxZU=",
    notes:
      "Идеальная весенняя поездка: тепло, но не жарко, мало туристов и потрясающие виды на Босфор.",
    attractions: [
      {
        id: "p1",
        name: "Голубая мечеть",
        city: "Стамбул",
        note: "Лучше приходить к открытию, пока мало людей.",
      },
      {
        id: "p2",
        name: "Галатская башня",
        city: "Стамбул",
        note: "Закат на смотровой площадке — must have.",
      },
    ],
    cafes: [
      {
        id: "c1",
        name: "Cafe Privato",
        city: "Стамбул",
        note: "Вкусные завтраки с видом на Галатский мост.",
      },
    ],
    createdAt: "2025-04-20T10:00:00.000Z",
    likedByUserIds: ["u2", "u3"],
    comments: [
      {
        id: "cm1",
        tripId: "t1",
        authorId: "u2",
        message: "Очень хочу в Стамбул весной, спасибо за советы по кафе!",
        createdAt: "2025-04-21T09:15:00.000Z",
      },
    ],
  },
  {
    id: "t2",
    userId: "u2",
    title: "Зимний Хельсинки",
    city: "Хельсинки",
    country: "Финляндия",
    startDate: "2025-01-05",
    endDate: "2025-01-09",
    days: 5,
    approximateCost: 120000,
    currency: "₽",
    rating: 4,
    coverImage:
      "https://media.istockphoto.com/id/183996236/ru/фото/хельсинки-финляндия.jpg?s=1024x1024&w=is&k=20&c=m7T7qvJlEYA03Hi_GmwPuomQw4OEFz0C03uw0ukzo1I=",
    notes:
      "Атмосферный северный город, много снега и уютных кафе. Немного дороговато, но того стоит.",
    attractions: [
      {
        id: "p3",
        name: "Суоменлинна",
        city: "Хельсинки",
        note: "Прогулка по крепости и море льда вокруг.",
      },
    ],
    cafes: [
      {
        id: "c2",
        name: "Cafe Regatta",
        city: "Хельсинки",
        note: "Очень атмосферное место на берегу залива.",
      },
    ],
    createdAt: "2025-01-15T12:00:00.000Z",
    likedByUserIds: ["u1"],
    comments: [],
  },
  {
    id: "t3",
    userId: "u3",
    title: "Уикенд в Баку",
    city: "Баку",
    country: "Азербайджан",
    startDate: "2025-05-01",
    endDate: "2025-05-04",
    days: 4,
    approximateCost: 65000,
    currency: "₽",
    rating: 5,
    coverImage:
      "https://media.istockphoto.com/id/690203164/ru/фото/огненные-башни-в-баку.jpg?s=1024x1024&w=is&k=20&c=JPKZsgo2bktddc9QyrpO70G3hcLQq-t7cQv_9dYCH-0=",
    notes:
      "Очень тёплый приём, вкусная еда и красивый старый город. Хочется вернуться ещё.",
    attractions: [
      {
        id: "p4",
        name: "Старый город Ичеришехер",
        city: "Баку",
        note: "Лучше гулять без карты и просто теряться в улочках.",
      },
    ],
    cafes: [
      {
        id: "c3",
        name: "Чайхана в старом городе",
        city: "Баку",
        note: "Чай с пахлавой и видом на улицы.",
      },
    ],
    createdAt: "2025-05-06T18:30:00.000Z",
    likedByUserIds: ["u1", "u2"],
    comments: [
      {
        id: "cm2",
        tripId: "t2",
        authorId: "u1",
        message: "Как насчёт следующей зимой вместе? Выглядит волшебно.",
        createdAt: "2025-01-16T14:45:00.000Z",
      },
    ],
  },
];

export function getUserTravelData(userId: string): {
  trips: Trip[];
} {
  const currentTrips = trips.filter((trip) => trip.userId === userId);

  return {
    trips: currentTrips,
  };
}

export function getAllTravelData(): {
  users: User[];
  trips: Trip[];
} {
  return {
    users,
    trips,
  };
}

export function getTripById(tripId: string): Trip | undefined {
  return trips.find((trip) => trip.id === tripId);
}

export function getUserById(userId: string): User | undefined {
  return users.find((user) => user.id === userId);
}

export function createTrip(
  input: Omit<Trip, "id" | "createdAt" | "likedByUserIds">,
): Trip {
  const newTrip: Trip = {
    ...input,
    id: `t${trips.length + 1}-${Date.now()}`,
    createdAt: new Date().toISOString(),
    likedByUserIds: [],
  };
  trips = [newTrip, ...trips];
  return newTrip;
}

export function updateTrip(tripId: string, patch: Partial<Trip>): Trip | null {
  let updated: Trip | null = null;
  trips = trips.map((trip) => {
    if (trip.id !== tripId) return trip;
    updated = { ...trip, ...patch };
    return updated;
  });
  return updated;
}

export function deleteTrip(tripId: string): boolean {
  const before = trips.length;
  trips = trips.filter((trip) => trip.id !== tripId);

  return trips.length < before;
}

export function createComment(
  tripId: string,
  authorId: string,
  message: string,
): Comment {
  const newComment: Comment = {
    id: `cm-${Date.now()}`,
    tripId,
    authorId,
    message,
    createdAt: new Date().toISOString(),
  };

  const currentTrip = trips.find((el) => el.id === tripId);
  if (currentTrip) {
    trips = [
      ...trips,
      { ...currentTrip, comments: [...currentTrip?.comments, newComment] },
    ];
  }

  return newComment;
}

export function toggleTripLike(
  tripId: string,
  userId: string,
): Trip | undefined {
  let updatedTrip: Trip | undefined;
  trips = trips.map((trip) => {
    if (trip.id !== tripId) return trip;
    const hasLike = trip.likedByUserIds.includes(userId);
    updatedTrip = {
      ...trip,
      likedByUserIds: hasLike
        ? trip.likedByUserIds.filter((id) => id !== userId)
        : [...trip.likedByUserIds, userId],
    };
    return updatedTrip;
  });
  return updatedTrip;
}
