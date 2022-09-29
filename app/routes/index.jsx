import styles from './index.css';

export function links() {
  return[{ rel: "stylesheet", href: styles}];
}

export default function Index() {
  return (
    <div className="Body">
      <h1>Welcome to History Finds</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
      </ul>
    </div>
  );
}
