workflow "Test" {
  on = "push"
  resolves = ["Docker Registry"]
}

action "Docker Registry" {
  uses = "actions/docker/login@26aeafa55c124ee6e6ed72676c86772366b1c558"
  runs = "echo 'hello'"
}
