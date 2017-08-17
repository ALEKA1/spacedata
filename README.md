# Space Data RESTful API

Space Data is an API designed for open data collection, aggregation, and retrieval of astrological and astromonical data.

Note: This is currently a work-in-progress :smile:

### General Setup Requirements
- Node v6.11.1 or higher
- Sequelize v4.2.1 or higher
- Sequelize-cli v2.7.0 or higher
- PM2

### Endpoint definition
```
/api/{version}/{table}/{:id}
```

### Examples
- `/api/v1/planets` should return an array of planets
- `/api/v1/planets/1` should return Mercury
