interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  [key: string]: any
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
  color: string
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  backgroundInfo: string
  name: string
  role: string
  heroImage: Image
  profilePic: Image
  typewriterText: string[]
}
