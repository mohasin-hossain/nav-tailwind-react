import PropTypes from "prop-types";

const Route = ({ route }) => {
  const { route_name, path } = route;

  return (
    <li className="mr-6">
      <a href={path}>{route_name}</a>
    </li>
  );
};

Route.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Route;
