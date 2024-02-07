export type EmailDataProps = (typeof EMAILS)[0]

export const EMAILS = [
  {
    id: "1",
    name: "Andy",
    avatar: "https://mighty.tools/mockmind-api/content/human/44.jpg",
    marker: "importante",
    subject: "What is Lorem Ipsum",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    start: false,
    date: "12 de fev.",
  },
  {
    id: "2",
    name: "John",
    avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    marker: "importante",
    subject: "Where does it come from",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. ",
    start: true,
    date: "13 de fev.",
  },
]
