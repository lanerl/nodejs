html
  head
    title=title
    link(href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css', rel='stylesheet')
  body
    div.container
      div.jumbotron
        h1 Hello!
 
        if user
          p Welcome, #{user.fullName}
          p
            a.small(href="profile") Edit my profile
          form(action='/logout', method='POST')
            button.btn.btn-default(type="submit") Logout
        else
          p Welcome to my app, ready to get started?
          p
            a.btn.btn-primary(href="/login") Login now
          p
            span.small Don't have an account?
            span &nbsp;
            a.small(href="/register") Register now