function calculateTotalV1(price, quantity) {
  let total = price * quantity;
  if (price <= 0 || quantity <= 0) {
    return 'Invalid input';
  }
  return total.toFixed(2);
}

function calculateTotal(price, quantity) {
  if (price > 0 && quantity > 0) {
    return +(price * quantity).toFixed(2);
  }
  return 'Invalid input';
}

// console.log(calculateTotal(5.99, 12));
// console.log(calculateTotal(-12, 34, 5));
// console.log(calculateTotal(-12, 34, -5));
// console.log(calculateTotal());
// console.log(calculateTotal(5));
// console.log(calculateTotal(5, 0));
// console.log(calculateTotal(0, 5));
// console.log(typeof calculateTotal(3.57, 8));

let text = `In today's digital age, communication has become increasingly complex. Sarah Johnson (sarah.johnson@techstart.com) leads our marketing team, while project updates are handled by Dev Kumar at dev.k89@projecthub.net. Customers can reach our support desk at help_desk@customercare.org, but for urgent matters, they should contact James Wilson, our emergency coordinator, at jwilson.emergency@response365.com. The quarterly newsletter is managed by marketing_news@companybulletin.net, though individual department newsletters like research.updates@labdaily.org and sales_team@quarterlynews.com have their own dedicated channels. For general inquiries, contact info@mainoffice.com or, if you're a member of the press, reach out to media.relations@pressdesk.org. Our sustainability initiatives can be discussed with green.team@ecofriendly.net. Our main education conatct is admin@school.district.edu

Additional email addresses include:

- user@example.com
- jane.doe@company.co.uk
- test_123@domain.net
- my+filter@gmail.com
- name@subdomain.company.org

- student@university.edu
- name@college.edu
- professor@department.school.edu`;

// Improved regex to handle email structure
// let regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?!\.edu)/g;
// let regeX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?!\.edu)/;
// const Regex =
//   /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?!\.edu$)/g;

// // Using split to separate email addresses (handles newlines)
// const emails = text.split(/\s*,\s*/).map((email) => email.match(regex));

// // Filter out null matches (non-emails)
// const validEmails = emails.filter((email) => email !== null);

// console.log(validEmails);

// console.log(text.match(Regex));

const lines = text.split('\n');

const emails = [];
for (const line of lines) {
  // Split the line by whitespace (assuming emails are separated by spaces)
  const words = line.split(/\s+/);
  for (const word of words) {
    // Check if the word is an email using a separate validation
    if (isEmail(word) && !word.endsWith('.edu')) {
      emails.push(word);
    }
  }
}

if (emails.length > 0) {
  console.log('Found emails with multiple subdomains (excluding .edu):');
  console.log(emails);
} else {
  console.log('No emails with multiple subdomains (excluding .edu) found.');
}

function isEmail(email) {
  // Basic email validation regex (can be improved)
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
