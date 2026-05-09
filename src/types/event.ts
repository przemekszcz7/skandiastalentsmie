export interface EventImage {
  url: string;
  title: string;
  desc: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  region: string;
  description: string;
  images: EventImage[];
}
