workflow "Test" {
  on = "push"
  resolves = ["GitHub Action for Docker"]
}

action "GitHub Action for Docker" {
  uses = "actions/docker/cli@26aeafa55c124ee6e6ed72676c86772366b1c558"
  runs = "echo 'hello'"
}
