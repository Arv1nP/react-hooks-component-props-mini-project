export default function TimeFeature({ minutes }) {
    let emojis = '';
    let numEmojis;
  
    if (minutes < 30) {
      numEmojis = Math.ceil(minutes / 5);
      emojis = '☕️'.repeat(numEmojis);
    } else {
      numEmojis = Math.ceil(minutes / 10);
      emojis = '🍱'.repeat(numEmojis);
    }
  
    return (
      <p>
        {emojis} {minutes} min read
      </p>
    );
  }