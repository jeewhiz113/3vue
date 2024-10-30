const AnchorLink = ({ linkUrl, linkTitle }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      {linkTitle}
    </a>
  );
};

export default AnchorLink;
