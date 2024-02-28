import Link from "next/link";

export default function ContentBlock({ content }) {
  const { title, subtitle, description, link } = content;

  return (
    <section className="section is-small has-background-white">
      <div className="container">
        <div className="has-text-centered">
          {title && (
            <h2 className="title p-4 is-size-2 is-size-3-mobile">{title}</h2>
          )}
          {subtitle && (
            <h4 className="subtitle is-size-5 is-size-6-mobile">{subtitle}</h4>
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
