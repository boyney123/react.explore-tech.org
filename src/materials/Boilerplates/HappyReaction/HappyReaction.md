---
path: '/materials/HappyReaction'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'HappyReaction'
  url: 'https://github.com/ignl/HappyReaction'
  github_url: 'https://github.com/ignl/HappyReaction'
  subscribers_count: '5'
  stargazers_count: '24'
  tags: ['']
  subtitle: 'HappyReaction - sample app and maven archetype for react-java crud application'
  clone_url: 'https://github.com/ignl/HappyReaction.git'
  ssh_url: 'git@github.com:ignl/HappyReaction.git'
  pushed_at: '2018-03-01T19:07:05Z'
  updated_at: '2018-12-06T15:44:59Z'
  author:
    name: 'ignl'
    avatar: 'https://avatars3.githubusercontent.com/u/2720602?v=4'
    github_url: 'https://github.com/ignl'
  latestRelease:
    tag_name: '1.0.1'
    name: '1.0.1'
    url: 'https://github.com/ignl/HappyReaction/releases/tag/1.0.1'
    created_at: '2017-09-07T20:51:22Z'
---
# HappyReaction
Maven archetype to quickly create React-Java app with all CRUD and search functionality out of box. It is based on Spring/Hibernate/QueryDsl stack on the backend and React/Semantic-UI on the front end. Adding a new entity with CRUD and search functionality will take only a few minutes and I hope to cut that down even more with code generation in the future.
Quick intro blog post with pictures: https://intelligentjava.wordpress.com/2017/09/03/reactjavaspring-project-archetype/

This archetype contains a self explanatory mini application instead of documentation.

## Quick start
### Start project
```bash
mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate -DarchetypeGroupId=org.happyreaction -DarchetypeArtifactId=HappyReaction-archetype -DarchetypeVersion=1.0.1 -DarchetypeRepository=https://raw.github.com/ignl/HappyReaction/mvn-repo/ -DgroupId=com.test -DartifactId=TestProject
```
### Build project
```bash
cd your_new_project_dir
mvn clean install
```
You might need to generate sources for QueryDsl dependendency, but it should work even without it:
```
mvn generate-sources
```
You also need to install <a href=https://projectlombok.org/>lombok</a> plugin for your IDE.

### Setup database
Install postgresql<br/>
Create database with name: happyreactiondb<br/>
Setup user with username/password: postgres/admin<br/>
### Deploy
Load project to your favorite IDE<br/>
Deploy it on apache tomcat and start it up.<br/>
### Setup NPM watch
Open command prompt, go to src/main/frontend and run 'npm run watch' if you want to have your javascript modifications reloaded (you might need to install npm on your machine separately)

# Features
* Search out of box
* Data table with pagination out of box
* Create, remove, update, delete out of box

# How to

To add a new entity all you have to do is the following:
* Create a new JPA Entity
```java
@Entity
@Table(name = 'CUSTOMER')
public class Customer extends BaseEntity {
    @Column(name = 'CUSTOMER_NAME', nullable = false)
    private String name;
}
```
* Create a new Spring Data Repository for new entity
```java
public interface CustomerRepository extends GenericRepository<Customer, Long> {
}
```

* Create a new Service that extends BaseService (where the all the logic is already implemented for you)
```java
@Service('customerService')
public class CustomerService extends BaseService<Customer> {
    @Autowired
    private CustomerRepository repository;
    
    @SuppressWarnings({ 'unchecked', 'rawtypes' })
    @Override
    protected JpaRepository<Customer, Long> getRepository() {
        return (JpaRepository) repository;
    }
}
```
* Create a new REST endpoint
```java
@Controller
@RequestMapping('/customer')
public class CustomerRestController extends CrudController<Customer> {
    @Autowired
    private CustomerService customerService;

    @Override
    public Service<Customer> getService() {
      return customerService;
    }
}
```
* And at last create a page in React UI
```jsx
// fields to show for search (and edit forms in this case).
const customersSearchFields = [
  {label: 'Name', field: 'name', type: 'String'}
];
// Edit and Create new forms
const CustomerEditForm = ({ match }) => {
    return <HappyForm entityId={match.params.id} editFields={customersSearchFields} entityName='customer' />
};
const CustomerNewForm = ({ match }) => {
    return <HappyForm editFields={customersSearchFields} entityName='customer' />
};
// Final step is to add our SearchForm and HappyForm components to react router
<Switch>
   <Route path='/customers' component={() => <SearchForm entityName='customer' searchFields={customersSearchFields} columnFields={customersSearchFields} fetchFields={['city']} />}/>
   <Route path='/customer/edit/:id' component={CustomerEditForm}/>
   <Route path='/customer/new' component={CustomerNewForm}/>
</Switch>
```

After you do that and deploy your app you will be able to create a new Customer in GUI, edit it, delete it, and search for it by its name right away. You don't need to write any logic for that as it is all handled by BaseService and SearchForm/HappyForm react components. Hopefully in the future all those steps will be automated.

## Supported field types
In the previous example (```{label: 'Name', field: 'name', type: 'String'}```) it was a string type customer name field. But HappyReaction supports and other field types.
* String
* Date
* DateTime
* Number
* Integer
* Object (other Entities)
* Enum
* Boolean

## Project site
For project site with javadocs, test coverage, pmd, findbugs etc run:
```
mvn site:run
```

<h1> Help wanted </h1>
I did not use this app in production yet (though it is partially based on happyfacescrud which was used in production). For that reason it lacks some features that could be very useful (which if you plan to use HappyReaction you will probably have to implement). For example user login, roles and security, hot code reloading, some better components etc. If you do any improvements - PRs are welcome and I will release new versions for others to take advantage of it too. Another idea I would welcome is code generation tool maybe based on freemarker or something similar so all the steps to create a new entity/page would be done with a single command. If you find HappyReaction useful and would like to contribute I would really welcome it! Also if you find better ways to do things (architecture, structure, code, react patterns, etc) - let me know.
