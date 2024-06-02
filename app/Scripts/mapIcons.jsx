import AppMapper from "../Apps/AppMapper";

export default function mapIcons({ onClick }) {
  return AppMapper({}).map((key) => (
    <button key={key} onClick={onClick}>
      Open {key}
    </button>
  ));
}
