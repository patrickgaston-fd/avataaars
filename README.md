# Avataaars for FluentDoc

A fork of the original [Avataaars](https://avataaars.com/) React component, extended and maintained by the [FluentDoc](https://fluentdoc.com) team to support enhanced avatar customization, worldbuilding traits, and identity expression for creative platforms.

Published packages are available at 👉 [https://www.npmjs.com/org/fluentdoc](https://www.npmjs.com/org/fluentdoc)

<p align="center"><img src="avataaars-example.png" alt="Avataaars Example" width="300" /></p>

---

## ✨ Key Differences from Original

- Scoped to `@fluentdoc/avataaars`
- Built to support **worldbuilding traits** (fantasy, sci-fi, cultural additions)
- Maintained for use in **FluentDoc**, a platform for language creation & storytelling
- More expressive facial and identity traits coming soon

---

## 🚀 Installation

```bash
npm install @fluentdoc/avataaars
```

Or with yarn:

```bash
yarn add @fluentdoc/avataaars
```

---

## 💡 Usage

```tsx
import * as React from 'react'
import Avatar from '@fluentdoc/avataaars'

export default function MyComponent() {
  return (
    <div>
      Your avatar:
      <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle="Circle"
        topType="LongHairMiaWallace"
        accessoriesType="Prescription02"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="Hoodie"
        clotheColor="PastelBlue"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
    </div>
  )
}
```

---

## 🧩 Piece Component

To render individual pieces of the avatar:

```tsx
import { Piece } from '@fluentdoc/avataaars';

export default function Pieces() {
  return (
    <div>
      <Piece pieceType="mouth" pieceSize="100" mouthType="Eating" />
      <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy" />
      <Piece pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited" />
      <Piece pieceType="accessories" pieceSize="100" accessoriesType="Round" />
      <Piece pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" />
      <Piece pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic" />
      <Piece pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red" />
      <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
      <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
    </div>
  )
}
```

---

## 🔧 Advanced Usage & Customization

To build your own avatar editor, use the `Avatar` component directly along with option props.

For inspiration, explore the original [Avataaars Generator](https://getavataaars.com/) or reference this fork’s additions in the `src/avatar` directory.

---

## 📦 Publish Location

All FluentDoc-scoped packages are published at:

🔗 https://www.npmjs.com/org/fluentdoc

---

## 🧙 Future Plans

- Fantasy traits (elf ears, glowing eyes, horns)
- Cultural headwear & clothing
- Mood presets and dynamic expressions
- World-themed packs for use across conlangs, character creation, and storytelling

---

## License

MIT (based on the original work by [Pablo Stanley](https://twitter.com/pablostanley) and [Fang-Pen Lin](https://twitter.com/fangpenlin))
