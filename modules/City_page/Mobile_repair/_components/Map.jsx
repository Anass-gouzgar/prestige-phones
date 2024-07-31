export default function Map({ map }) {
  return (
    map && (
      <iframe
        src={map}
        width="100%"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="max-w-[1000px] rounded-2xl"
      ></iframe>
    )
  );
}
