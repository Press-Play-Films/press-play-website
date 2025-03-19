
export type ProjectCategory = 'all' | 'video';

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Fuse Nightclub Promo",
    description: "High-energy promotional video showcasing nightlife atmosphere and entertainment.",
    thumbnail: "https://i.vimeocdn.com/video/438394212-1fff1408539b7be4dec8af951c955b8a2aec415a67c3bb895d54fb5f2777c9fd-d_640",
    videoUrl: "https://player.vimeo.com/video/67933840?h=a5786d80c4&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 2,
    title: "The Law of Nines",
    description: "A short film based on an excerpt from N.Y. Times best-selling author Terry Goodkind to promote his latest book.",
    thumbnail: "https://i.vimeocdn.com/video/23430484-dbbe44ee8a4c9c81f3da8d6b0e9df5fc23a31de0d055b454b2d3badbe1d12f24-d_640",
    videoUrl: "https://player.vimeo.com/video/6174101?h=b1777bbf85&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 3,
    title: "The Law of Nines (Behind the Scenes)",
    description: "A behind the scenes look of the making of the Law of Nines.",
    thumbnail: "https://i.vimeocdn.com/video/39599292-18af5a5e46bd56ed74cbe3b43a90beb73b6bcf4d3c7bfdec43c89989c99cfa00-d_640",
    videoUrl: "https://player.vimeo.com/video/8228797?h=b3f21e6126&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 4,
    title: "A Different Corner (Extended) Trailer",
    description: "The full trailer for our Feature Film A Different Corner.",
    thumbnail: "https://i.vimeocdn.com/video/131842263-89a86c9e9641eeff4ce5bf9f6f75b7d0b0fc4f5d3c712e71ca78681436434bfc-d_640",
    videoUrl: "https://player.vimeo.com/video/21007773?h=f6a6e83793&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 5,
    title: "A Different Corner (Teaser) Trailer",
    description: "The teaser trailer for our first Feature Film A Different Corner.",
    thumbnail: "https://i.vimeocdn.com/video/83525259-aaa876bdc8cce4d02d52e8700e5cbecd1fc75c2df4ed639dda5b8848f73a3938-d_640",
    videoUrl: "https://player.vimeo.com/video/13875773?h=8118e61bc5&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 6,
    title: "Dani",
    description: "A clip from my film A Different Corner, introducing the character of Dani.",
    thumbnail: "https://i.vimeocdn.com/video/909729335-4f03a950f0d6d3010a96fae7a7146ae7a2a8a48964a4735be97bb01e8e6ba492-d_640",
    videoUrl: "https://player.vimeo.com/video/10861982?h=533b708382&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 7,
    title: "Get Your Hands On Me",
    description: "A music video produced for the artist Samantha Alexis.",
    thumbnail: "https://i.vimeocdn.com/video/469706233-5a3cbeaac4e2da649beddd9fb778373a6d7482203b73b064d8c14c10bf84e80e-d_640",
    videoUrl: "https://player.vimeo.com/video/89813382?h=faa8e1acd2&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 8,
    title: "Capture Me",
    description: "Video created for the artist Danielle.",
    thumbnail: "https://i.vimeocdn.com/video/466568818-68ce2441b31f5b8a8f9811f1d1dcebe0acd1b1a3bedc338b10cbe72b94dea62e-d_640",
    videoUrl: "https://player.vimeo.com/video/86253787?h=6b6e33fbfa&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 9,
    title: "Odessa",
    description: "Music video produced for the artist \"The Star Killers\".",
    thumbnail: "https://i.vimeocdn.com/video/118188204-3c1fd052d07727e8ada50274f0bbd928b5d271b2dbcbd2323b1ca8554c8fefb4-d_640",
    videoUrl: "https://player.vimeo.com/video/18550227?h=d2399a7f11&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 10,
    title: "NEST",
    description: "The opening of Terry Goodkind's latest novel NEST. Voice Over by Terry Goodkind.",
    thumbnail: "https://i.vimeocdn.com/video/135485248-5aa36d74d1ed6c9f314d0c4a86eb9ef98ddabe9d2b370070d3db8addd0d7b6d8-d_640",
    videoUrl: "https://player.vimeo.com/video/21217448?h=d80e8ebad4&title=0&byline=0&portrait=0",
    category: "video"
  }
];
