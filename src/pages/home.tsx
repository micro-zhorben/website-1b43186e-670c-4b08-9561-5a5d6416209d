import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceSelector } from "@/components/preference-selector";
import { CoffeeCard } from "@/components/coffee-card";
import { CoffeeSkeleton } from "@/components/coffee-skeleton";
import { Coffee } from "lucide-react";

interface CoffeeRecommendation {
  id: string;
  name: string;
  description: string;
  roastLevel: string;
  intensity: number;
  imageUrl?: string;
}

export function Home() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);

  const handleGetRecommendations = async (preferences: any) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock recommendations based on preferences
    const mockRecommendations: CoffeeRecommendation[] = [
      {
        id: "1",
        name: "Ethiopian Yirgacheffe",
        description: "A light roast with floral notes and citrus undertones. Perfect for those who prefer a delicate, complex cup.",
        roastLevel: preferences.roastLevel,
        intensity: preferences.intensity,
      },
      {
        id: "2",
        name: "Colombian Supremo",
        description: "Medium roasted beans with a balanced body, caramel sweetness, and subtle nutty finish.",
        roastLevel: preferences.roastLevel,
        intensity: preferences.intensity,
      },
      {
        id: "3",
        name: "Sumatra Mandheling",
        description: "Dark roasted with full body, earthy tones, and hints of dark chocolate and spice.",
        roastLevel: preferences.roastLevel,
        intensity: preferences.intensity,
      },
    ];

    setRecommendations(mockRecommendations);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-6 md:px-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-primary" />
          <Typography.H2>AI Coffee Recommender</Typography.H2>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead>
            Tell us your preferences, and our AI will recommend the perfect coffee for you.
          </Typography.Lead>
        </div>

        <div className="mb-12 flex justify-center">
          <PreferenceSelector onSubmit={handleGetRecommendations} />
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CoffeeSkeleton />
            <CoffeeSkeleton />
            <CoffeeSkeleton />
          </div>
        ) : recommendations.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                name={coffee.name}
                description={coffee.description}
                roastLevel={coffee.roastLevel}
                intensity={coffee.intensity}
                imageUrl={coffee.imageUrl}
                onSelect={() => {
                  console.log(`Selected coffee: ${coffee.name}`);
                }}
              />
            ))}
          </div>
        ) : null}
      </main>

      <footer className="mt-16 text-center">
        <Typography.Muted>
          Powered by AI to help you discover your perfect coffee match
        </Typography.Muted>
      </footer>
    </div>
  );
}