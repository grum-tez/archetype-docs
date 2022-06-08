export const ticket = {
  types: [
    { label: 'ticket', link: '/docs/reference/types#ticket<T>', desc: 'Contract authenticaed data' },
  ],
  builtins: [
    { label: 'create_ticket', link: '/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)', desc: 'Create tickets' },
    { label: 'join_tickets', link: '/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)', desc: 'Join tickets' },
    { label: 'read_ticket', link: '/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)', desc: 'Read ticket' },
    { label: 'split_ticket', link: '/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)', desc: 'Split ticket' },
  ]
}