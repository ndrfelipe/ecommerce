import { useState } from "react";
import { products, getAllCategories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { capitalizeFirstLetter } from "../utils/format";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const allCategories = getAllCategories();

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                        product.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-20 bg-white p-4 rounded-lg border border-indigo-200">
              <Input 
                placeholder="Search products..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="mb-4"
              />
              
              <Accordion type="single" collapsible defaultValue="categories">
                <AccordionItem value="categories">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={category} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={category} className="cursor-pointer capitalize">
                            {capitalizeFirstLetter(category)}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              {selectedCategories.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedCategories([])}
                      className="text-xs hover:bg-transparent p-0"
                    >
                      Clear all
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedCategories.map(category => (
                      <Badge 
                        key={category}
                        className="capitalize cursor-pointer"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {capitalizeFirstLetter(category)}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center p-12 border rounded-lg">
                <h3 className="font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try changing your filters or search term</p>
                <Button onClick={() => {
                  setSearch('');
                  setSelectedCategories([]);
                }}>
                  Reset filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
