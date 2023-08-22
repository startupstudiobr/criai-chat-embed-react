<!-- markdownlint-disable MD030 -->

# Criai Chat Embed React

React library to display criai chatbot on your website

![Criai](https://github.com/startupstudiobr/criai-chat-embed-react/blob/main/images/ChatEmbed.gif?raw=true)

## Install

```bash
npm install criai-chat-embed criai-chat-embed-react
```

or

```bash
yarn add criai-chat-embed criai-chat-embed-react
```

## Import

Full Page Chat

```tsx
import { FullPageChat } from "criai-chat-embed-react";

const App = () => {
  return (
    <FullPageChat
      chatflowid="your-chatflow-id"
      apiHost="http://localhost:3000"
    />
  );
};
```

Popup Chat

```tsx
import { BubbleChat } from "criai-chat-embed-react";

const App = () => {
  return (
    <BubbleChat chatflowid="your-chatflow-id" apiHost="http://localhost:3000" />
  );
};
```
