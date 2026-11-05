# Sample API Data

This directory contains sample JSON data for use in JQR documentation examples.

## Available Endpoints

### Users
**File:** `users.json`

Sample user data with profiles and roles.

**Fields:**
- `id` - Unique user identifier
- `name` - Full name
- `email` - Email address
- `role` - User role (Admin, Developer, Designer, Manager)
- `avatar` - Avatar image URL
- `status` - Account status (active, inactive)
- `joinedAt` - Join date

**Example:**
```javascript
fetch('/assets/api/jqr-docs/users.json')
  .then(response => response.json())
  .then(users => console.log(users));
```

---

### Posts
**File:** `posts.json`

Blog posts with titles, content, and metadata.

**Fields:**
- `id` - Unique post identifier
- `userId` - Author user ID
- `title` - Post title
- `excerpt` - Short summary
- `content` - Full content
- `tags` - Array of tags
- `publishedAt` - Publication date
- `likes` - Like count
- `comments` - Comment count

**Example:**
```javascript
asyncState: {
  async posts() {
    const response = await fetch('/assets/api/jqr-docs/posts.json');
    return response.json();
  }
}
```

---

### Products
**File:** `products.json`

E-commerce product catalog.

**Fields:**
- `id` - Unique product identifier
- `name` - Product name
- `description` - Product description
- `price` - Price in USD
- `category` - Product category
- `stock` - Available quantity
- `image` - Product image URL
- `rating` - Average rating (0-5)
- `reviews` - Number of reviews
- `inStock` - Boolean availability

**Example:**
```javascript
asyncState: {
  async products() {
    const response = await fetch('/assets/api/jqr-docs/products.json');
    return response.json();
  }
}
```

---

### Todos
**File:** `todos.json`

Todo items with categories and priorities.

**Fields:**
- `id` - Unique todo identifier
- `text` - Todo description
- `done` - Completion status
- `priority` - Priority level (high, medium, low)
- `category` - Category (work, personal)
- `dueDate` - Due date

**Example:**
```javascript
asyncState: {
  async todos() {
    const response = await fetch('/assets/api/jqr-docs/todos.json');
    return response.json();
  }
}
```

---

### Comments
**File:** `comments.json`

Comments on blog posts.

**Fields:**
- `id` - Unique comment identifier
- `postId` - Parent post ID
- `userId` - Commenter user ID
- `userName` - Commenter name
- `userAvatar` - Commenter avatar URL
- `text` - Comment text
- `createdAt` - Creation timestamp
- `likes` - Like count

**Example:**
```javascript
asyncState: {
  async comments(state) {
    const response = await fetch('/assets/api/jqr-docs/comments.json');
    const allComments = await response.json();
    // Filter by post ID
    return allComments.filter(c => c.postId === state.currentPostId);
  }
}
```

---

## Usage in Documentation

### In Live Examples

Reference these files using the symlinked path:

```javascript
asyncState: {
  async users() {
    const response = await fetch('/assets/api/jqr-docs/users.json');
    return response.json();
  }
}
```

### Simulated Delays

To simulate network latency in examples:

```javascript
asyncState: {
  async users() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1s delay
    const response = await fetch('/assets/api/jqr-docs/users.json');
    return response.json();
  }
}
```

### Error Simulation

To demonstrate error handling:

```javascript
asyncState: {
  async data(state) {
    if (state.simulateError) {
      throw new Error('Failed to fetch data');
    }
    const response = await fetch('/assets/api/jqr-docs/users.json');
    return response.json();
  }
}
```

---

## Data Relationships

- `posts.userId` → `users.id`
- `comments.postId` → `posts.id`
- `comments.userId` → `users.id`

## Credits

- Avatar images: [Pravatar](https://pravatar.cc)
- Placeholder images: [placeholder.com](https://placeholder.com)

---

## Adding More Data

To add new sample data:

1. Create a new JSON file in this directory
2. Follow the existing naming convention (`resource.json`)
3. Include a variety of data scenarios (empty, success, edge cases)
4. Update this README with the new endpoint documentation
