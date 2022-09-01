# The swapi app exercise

## Endpoints used:

People: "https://swapi.dev/api/people"
Planets "https://swapi.dev/api/planets"

## Requirements

1. Create a new angular project and set the style to be scss
2. In the project create 2 feature modules called people and planets respectfully
3. These modules should have 2 components each , one to list the people/planets and one to show details of person/planet
4. Configure the project so that the modules are lazily loaded
5. Configure the feature modules to have their own routes leading to the components
6. The routes should be:

- localhost:4200/people
- localhost:4200/people/details/1
- localhost:4200/planets
- localhost:4200/planets/details/1

7. Add a header component that will have navigation to the newly created modules
8. Create a service called `swapi` that will handle the fetching of data
9. Use behavioral subjects for showing all planets/people and for selecting person/planet

## Tips

- Use code from class a reference
- Ask questions as soon as you get stuck
- Take it one small step at a time
