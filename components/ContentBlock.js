import Link from "next/link";

export default function ContentBlock({ content }) {
  const { title, subtitle, description, link } = content;

  return (
    <section className="section is-small has-background-white">
      <div className="container">
        <div className="has-text-centered">
          {title && (
            <h2 className="title has-text-black p-4 is-size-2">{title}</h2>
          )}
          {subtitle && (
            <h4 className="subtitle has-text-black is-size-5">{subtitle}</h4>
          )}
          <hr />
        </div>
        <div className="content">{description}</div>
        <div className="has-text-centered mt-6">
          <Link className="button-styles" href={link.to}>
            {link.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
