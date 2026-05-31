type TagListProps = {
  items: string[];
};

export default function TagList({ items }: TagListProps) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}
