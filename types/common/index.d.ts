type Place = {
  title: string,
  img: string,
  address: string,
  phone: {
    phone: string,
    country: string
  }
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: { 
    title: string,
    img: string,
    followers: number,
    following: number
  }, 
  type: string
}
