import ServiceItem from "./service-item";

export default function ServiceList(props) {
  const { items } = props;

  return (
    <ul>
      {/* {items.map((event) => (
        <ServiceItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))} */}
      <ServiceItem />
    </ul>
  );
}
